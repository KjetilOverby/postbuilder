import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItemList(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        style={{
          border: "1px solid var(--text)",
          marginBottom: ".5rem",
          padding: "8px 10px",
          borderRadius: "5px",
          background: "linear-gradient(to right,rgb(224, 242, 241), rgb(0, 138, 138))",
          color: "#384c70",
          display: "flex",
        }}>
        <p
          className={props.treslag === "Gran" ? "gran" : "furu"}
          style={{ width: "4rem" }}>
          {props.treslag}
        </p>
        <p style={{ width: "7rem" }}>Klasse: {props.klasse} </p>
        <p style={{ width: "7rem" }}>Ant: {props.ant} </p>
        <p style={{ width: "7rem" }}>m3: {props.m3} </p>
        <p
          className={props.status === "tøm" ? "tom" : "stopp"}
          style={{ width: "5rem" }}>
          {props.status}{" "}
        </p>
        <p style={{ width: "4rem" }}>{props.prosent}% </p>
        <p>
          post: {props.post}x{props.breddePost}{" "}
        </p>
      </div>
      <style>{`
      .furu {
        color: orangered
      }
      .gran {
        color: seagreen
      }
      .tom {
        color: seagreen

      }
      .stopp {
        color: orangered
      }
      `}</style>
    </div>
  );
}
