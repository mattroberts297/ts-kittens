interface Some {
  kind: "some";
  value: any;
}

interface None {
  kind: "none";
}

export type Maybe = Some | None;

export function print(m: Maybe) {
  switch (m.kind) {
    case "some": return `Some(${m.value})`;
    case "none": return "None";
  }
}
