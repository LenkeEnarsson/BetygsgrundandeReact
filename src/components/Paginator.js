import React from 'react'

const Paginator = ({ onPageChange, current, max, totalGroups }) => {
    const isFirst = current === 0;
    const isLast = current === max;


    const onPaging = (e) => {
        const action = e.target.dataset.id;

        switch (action) {
            case "start": current = 0; break;
            case "back": current = current - 1; break;
            case "forward": current = current + 1; break;
            case "end": current = max; break;
            default: current = 0; break;
        }
        if (current < 0) current = 0;
        if (current > max) current = max;

        onPageChange(current);
    }

    return (
        <>
            <div className="pageNav">
                <div className="Paginator">
                    <button className={isFirst ? "PaginatorChoice Disabled" : "PaginatorChoice"} onClick={onPaging} data-id="start">&lt;&lt;</button>
                    <button className={isFirst ? "PaginatorChoice Disabled" : "PaginatorChoice"} onClick={onPaging} data-id="back"> &lt;</button>
                    <p className="PageInfo" id="PageInfo">{current + 1}/{max + 1} ({totalGroups}st)</p>
                    <button className={isLast ? "PaginatorChoice Disabled" : "PaginatorChoice"} onClick={onPaging} data-id="forward">&gt;</button>
                    <button className={isLast ? "PaginatorChoice Disabled" : "PaginatorChoice"} onClick={onPaging} data-id="end">&gt;&gt;</button>
                </div>
            </div>
        </>
    )
}

export default Paginator