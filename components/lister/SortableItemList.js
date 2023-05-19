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
          padding: '17px 10px',
          borderRadius: '5px',
          background: 'var(--table-bg)',
          color: 'var(--primary-text)',
          display: 'flex',
        }}>
          <p style={{width: '4rem'}}>{props.treslag}</p>
          <p style={{width: '7rem'}}>Klasse: {props.klasse} </p>
          <p style={{width: '7rem'}}>Ant: {props.ant} </p>
          <p style={{width: '7rem'}}>m3: {props.m3} </p>
          <p style={{width: '8rem'}}>status: {props.status} </p>
          <p style={{width: '7rem'}}>xLog: {props.xLog} </p>
          <p style={{width: '4rem'}}>%: {props.prosent} </p>
          <p>post: {props.post}x{props.breddePost} </p>
      </div>
    </div>
  );
}
