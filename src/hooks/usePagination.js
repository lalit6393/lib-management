import { useState } from 'react';
import { itemsPerPage } from '../config/pagination';

const usePagination = (data = []) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return {
        currentItems,
        pageCount,
        handlePageClick,
    };
};

export default usePagination;
