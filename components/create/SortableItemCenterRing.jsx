import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";

export function SortableItemCenterRing(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id ? props.id : props._id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  const [ringShimsCalc, setRingShimsCalc] = useState();

  useEffect(() => {
    if (props.ringShims) {
      setRingShimsCalc(Number(props.ring) + 1.4 - props.ringShims);
    }

    if (props.shims) {
      setRingShimsCalc(
        Number(props.ring) + 1.4 - props.ringShims - props.shims
      );
    }
  }, [props.ring, props.ringShims, props.shims, ringShimsCalc]);

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        style={{
          border: "1px solid white",
          padding: "5.5px",
          borderRadius: "5px",
          display: "grid",
          placeItems: "center",
          width: "5rem",
          height: "11rem",
          marginRight: ".5rem",
          background: "var(--center)",
          fontSize: "1.5rem",
          color: "var(--center-text)",
          position: "relative",
        }}>
        {(Number(props.ring) + 1.4).toFixed(1)}

        <p
          style={{
            fontSize: ".8rem",
            position: "absolute",
            top: "-25px",
            color: "var(--text)",
          }}>
          {props.ring}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: "-65px",
          }}>
          <p
            style={{
              fontSize: ".8rem",
              color: "var(--text)",
            }}>
            {props.ringShims}
          </p>
          <p
            style={{
              fontSize: ".8rem",
              color: "var(--text)",
            }}>
            {ringShimsCalc && ringShimsCalc !== NaN && ringShimsCalc.toFixed(1)}
          </p>
          <p
            style={{
              fontSize: ".8rem",
              color: "var(--text)",
            }}>
            {props.shims}
          </p>
        </div>
      </div>
    </div>
  );
}
