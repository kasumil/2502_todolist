import { formatDateTime } from "@/utils/format";
import React, { useState } from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

const ListsRow = ({ item }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [time, setTime] = useState(item.time);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className="flex flex-col space-y-4 p-4 border-b">
            {/* 체크박스와 텍스트 */}
            <div className="flex justify-between flex-col md:flex-row">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        id={`checkbox-${item.id}`} // 고유 ID 사용
                        className="h-5 w-5 text-blue-500"
                    />
                    <label htmlFor={`checkbox-${item.id}`} className="text-lg">
                        <p className="text-wrap">{item.text}</p>
                    </label>
                </div>
                {isChecked && (
                    <div className="flex justify-end gap-4">
                        <button className="hover:text-blue-500 active:text-blue-700 transition duration-200">
                            <HiPencilAlt size={25} />
                        </button>
                        <button className="hover:text-red-500 active:text-red-700 transition duration-200">
                            <HiTrash size={25} />
                        </button>
                    </div>
                )}
            </div>

            {/* 시간 선택 */}
            <div className="flex items-center space-x-2 pl-3 md:pl-6">
                <input
                    type="datetime-local"
                    value={time ? formatDateTime(time) : ""}
                    onChange={handleTimeChange}
                    disabled={!isChecked} // 체크박스가 선택되지 않으면 시간 입력 불가
                    className="p-2 border rounded-md"
                />
            </div>
        </div>
    );
};

export default ListsRow;
