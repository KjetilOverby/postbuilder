import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItemList } from "../../components/lister/SortableItemList";

const ListSort = ({ skurliste }: any) => {
  const [list, setList] = useState<any>([]);
  const [list2, setList2] = useState([
    { id: "1", klasse: "2" },
    { id: "2", klasse: "8" },
    { id: "3", klasse: "8" },
    { id: "4", klasse: "8" },
    { id: "5", klasse: "8" },
    { id: "6", klasse: "8" },
  ]);

  useEffect(() => {
    if (skurliste) {
      setList(skurliste.map((item: any) => item));
    }
  }, [skurliste]);

  function handleDragList(event: any) {
    console.log("drag works");

    const { active, over } = event;
    if (active.id !== over.id) {
      setList((items: any) => {
        const oldIndex = items.findIndex((item: any) => item.id === active.id);
        const newIndex = items.findIndex((item: any) => item.id === over.id);
        // const activeIndex = items.indexOf(active.id);
        // const overIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <>
      <div className="container">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragList}
        >
          <div className="slistContainer">
            <SortableContext
              strategy={verticalListSortingStrategy}
              items={list}
            >
              {list &&
                list.map((item: any) => {
                  return (
                    <div key={item.id} className="sort-container">
                      <SortableItemList
                        key={item.id}
                        id={item.id}
                        klasse={item.klasse}
                      />
                    </div>
                  );
                })}
            </SortableContext>
          </div>
        </DndContext>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default ListSort;
