export default function CarPagination({handlerCb}) {
    return (
        <div id="carPagination">
            <button onClick={handlerCb}>Load more</button>
        </div>

    )
}