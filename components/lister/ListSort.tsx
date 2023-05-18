import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItemList } from "../../components/lister/SortableItemList";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const ListSort = ({ skurliste, setList, list }: any) => {
  useEffect(() => {
    if (skurliste) {
      setList(skurliste.map((item: any) => item));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skurliste]);

  function handleDragList(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setList((items: any) => {
        const oldIndex = items.findIndex((item: any) => item.id === active.id);
        const newIndex = items.findIndex((item: any) => item.id === over.id);
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
              items={list && list}
            >
              {list &&
                list.map((item: any) => {
                  return (
                    <div key={item.id} className="sort-container">
                      <SortableItemList
                        key={item.id}
                        id={item.id}
                        treslag={item.treslag}
                        klasse={item.klasse}
                        ant={item.ant}
                        m3={item.m3}
                        status={item.status}
                        post={item.post}
                        breddePost={item.breddePost}
                        xLog={item.xLog}
                        prosent={item.prosent}
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
