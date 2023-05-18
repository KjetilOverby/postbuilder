import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItemList(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id  });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        style={{
          border: '1px solid var(--text)',
          marginBottom: '.5rem',
          padding: '10px',
          borderRadius: '5px',
          background: 'var(--hover)',
          color: 'var(--text)'
        }}>
        {props.klasse}
      </div>
    </div>
  );
}
