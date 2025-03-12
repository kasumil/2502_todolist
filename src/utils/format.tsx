const formatDateTime = (timestamp, split = "-") => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    // 날짜를 배열로 만들고, 구분자를 join으로 적용
    const formattedDate = [year, month, day].join(split);

    return `${formattedDate} ${hours}:${minutes}`;
};

export { formatDateTime };
