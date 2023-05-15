import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItemRings(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id ? props.id : props._id, ring: props.ring });

  const style = { transform: CSS.Transform.toString(transform), transition };

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
          background: "var(--outer)",
          fontSize: "1.5rem",
          color: "var(--outer-text)",
        }}>
        {props.ring}
      </div>
    </div>
  );
}
