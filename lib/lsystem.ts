import { Quaternion, Vector3 } from "three";

export type LSystemRules = Record<string, string>;

export type LSystemConfig = {
  axiom: string;
  rules: LSystemRules;
  iterations: number;
  angleDegrees: number;
  stepLength: number;
  stepFalloff?: number;
};

export function generate(config: LSystemConfig): string {
  let current = config.axiom;
  for (let i = 0; i < config.iterations; i++) {
    let next = "";
    for (const c of current) {
      next += config.rules[c] ?? c;
    }
    current = next;
  }
  return current;
}

export type Segment = {
  start: Vector3;
  end: Vector3;
  depth: number;
};

type TurtleState = {
  position: Vector3;
  heading: Vector3;
  left: Vector3;
  up: Vector3;
  depth: number;
};

function cloneState(s: TurtleState): TurtleState {
  return {
    position: s.position.clone(),
    heading: s.heading.clone(),
    left: s.left.clone(),
    up: s.up.clone(),
    depth: s.depth,
  };
}

function rotate(vec: Vector3, axis: Vector3, angle: number): Vector3 {
  const q = new Quaternion().setFromAxisAngle(axis, angle);
  return vec.clone().applyQuaternion(q).normalize();
}

export function interpret(sequence: string, config: LSystemConfig): Segment[] {
  const segments: Segment[] = [];
  const angleRad = (config.angleDegrees * Math.PI) / 180;
  const falloff = config.stepFalloff ?? 1.0;

  let state: TurtleState = {
    position: new Vector3(0, 0, 0),
    heading: new Vector3(0, 1, 0),
    left: new Vector3(-1, 0, 0),
    up: new Vector3(0, 0, 1),
    depth: 0,
  };
  const stack: TurtleState[] = [];

  for (const c of sequence) {
    switch (c) {
      case "F": {
        const step = config.stepLength * Math.pow(falloff, state.depth);
        const end = state.position.clone().addScaledVector(state.heading, step);
        segments.push({
          start: state.position.clone(),
          end,
          depth: state.depth,
        });
        state.position = end;
        break;
      }
      case "+":
        state.heading = rotate(state.heading, state.up, angleRad);
        state.left = rotate(state.left, state.up, angleRad);
        break;
      case "-":
        state.heading = rotate(state.heading, state.up, -angleRad);
        state.left = rotate(state.left, state.up, -angleRad);
        break;
      case "&":
        state.heading = rotate(state.heading, state.left, angleRad);
        state.up = rotate(state.up, state.left, angleRad);
        break;
      case "^":
        state.heading = rotate(state.heading, state.left, -angleRad);
        state.up = rotate(state.up, state.left, -angleRad);
        break;
      case "\\":
        state.left = rotate(state.left, state.heading, angleRad);
        state.up = rotate(state.up, state.heading, angleRad);
        break;
      case "/":
        state.left = rotate(state.left, state.heading, -angleRad);
        state.up = rotate(state.up, state.heading, -angleRad);
        break;
      case "[":
        stack.push(cloneState(state));
        state.depth += 1;
        break;
      case "]": {
        const popped = stack.pop();
        if (popped) state = popped;
        break;
      }
      default:
        break;
    }
  }

  return segments;
}

export const defaultTreeConfig: LSystemConfig = {
  axiom: "X",
  rules: {
    X: "F[+X][-X]FX",
    F: "FF",
  },
  iterations: 7,
  angleDegrees: 25,
  stepLength: 0.018,
  stepFalloff: 0.85,
};
