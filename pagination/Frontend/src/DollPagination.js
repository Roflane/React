import "./DollPagination.css";

export default function DollPagination({handlerCb}) {
    return (
        <div id="dollPagination">
            <button onClick={handlerCb}>Load more</button>
        </div>

    )
}