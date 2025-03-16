"use client";
import React, { useState } from "react";
import useStore from "@/store";
import { logout } from "@/utils/client/apis";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";
import Sidebar from "@/components/home/Sidebar";
import TaskList from "@/components/home/TaskList";
import TaskModal from "@/components/modals/TaskModal";
import DeleteModal from "@/components/modals/DeleteModal";
import ProjectNameInput from "@/components/home/ProjectNameInput"; // Import the new component
import CategoryNameModal from "@/components/modals/CategoryNameModal";

type Props = {};

const HomePage = (props: Props) => {
    const { isVisible, modalShow, modalHide } = useModal();
    const {
        isVisible: deleteModal,
        modalShow: deleteShow,
        modalHide: deleteHide,
    } = useModal();
    const {
        isVisible: categoryModal,
        modalShow: categoryShow,
        modalHide: categoryHide,
    } = useModal();

    const mockData = [
        {
            id: 1,
            text: "Complete project documentation",
            time: new Date("2025-03-12T12:30:00").getTime(), // 타임스탬프
        },
        {
            id: 2,
            text: "Attend team meeting",
            time: new Date("2025-03-12T14:00:00").getTime(), // 타임스탬프
        },
        {
            id: 3,
            text: "Finish coding task",
            time: new Date("2025-03-12T16:15:00").getTime(), // 타임스탬프
        },
        {
            id: 4,
            text: "Review pull requests",
            time: new Date("2025-03-12T10:00:00").getTime(), // 타임스탬프
        },
    ];

    return (
        <div className="h-dvh p-5 p-md-10 bg-white flex flex-col md:flex-row gap-3">
            <Sidebar categoryShow={categoryShow} />
            <TaskList
                tasks={mockData}
                showModal={modalShow}
                deleteShow={deleteShow}
            />
            <TaskModal isOpen={isVisible} onClose={modalHide} />
            <DeleteModal isOpen={deleteModal} onClose={deleteHide} />
            <CategoryNameModal isOpen={categoryModal} onClose={categoryHide} />
        </div>
    );
};

export default HomePage;
