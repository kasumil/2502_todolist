import React from "react";
import TitleText from "@/components/common/TitleText";
import List from "@/components/common/List";
import ListsRow from "@/components/common/ListRow";

const TaskList = ({ tasks, showModal, deleteShow }) => {
    return (
        <div className="w-full h-full bg-white rounded-lg shadow-2xl p-5 flex flex-col border border-gray-300 gap-4 overflow-y-scroll">
            <TitleText>오늘</TitleText>
            <List
                items={tasks}
                Component={ListsRow}
                showModal={showModal}
                deleteShow={deleteShow}
            />
            <TitleText>내일</TitleText>
            <List
                items={tasks}
                Component={ListsRow}
                showModal={showModal}
                deleteShow={deleteShow}
            />
        </div>
    );
};

export default TaskList;
