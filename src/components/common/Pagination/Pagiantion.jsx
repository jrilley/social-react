import s from "./pagination.module.css";

const Pagination = (props) => {
    let pageSize = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageSize; i++) {
        pages.push(i);
    }


    return <div className={s.pagination}>
        {props.currentPage > pages[0] ?
            <div>
                    <span onClick={() => {
                        props.setPage(pages[0])
                    }} onMouseDown="return false">&lt;&lt;</span>
                <span onClick={() => {
                    props.setPage(props.currentPage - 1)
                }} onMouseDown="return false">&lt;</span>
            </div>
            : null}
        <span className={s.currentPage}>{props.currentPage}</span>
        {props.currentPage < pages[pages.length - 1] ?
            <div>
                    <span onClick={() => {
                        props.setPage(props.currentPage + 1)
                    }} onMouseDown="return false">&gt;</span>
                <span onClick={() => {
                    props.setPage(pages[pages.length - 1])
                }} onMouseDown="return false">&gt;&gt;</span>
            </div>
            : null}
    </div>
}

export default Pagination;