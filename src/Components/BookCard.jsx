import { useCallback } from "react";


function BookCard({ data, deleteData, updateData, toggle }) {

    const EditAuthor = useCallback(async () => {
        const EditName = prompt('enter Author name: ');
        if (EditName !== null) {
            await updateData(data.id, { author: EditName })
            // setData(prev=>prev.map(book=> book.id === data.id ?{...book, author:EditName}:book))
        }
    }, [data.id, updateData]);

    const deleteBook = useCallback(async () => {
        console.log('1id', data.id)
        await deleteData(data.id)
        // setData(prev=>prev.filter(book=>book.id !== data.id))
    }, [data.id, deleteData]);

    const handleToggleStatus = useCallback(async () => {
        await toggle(data.id);

        // setData(prev=>prev.map(book=>book.id === id ? 
        //     {...book, status:book.status==='Available'?'Unavailable':'Available'}
        //     :book))
    }, [data, toggle])
    return (
        <>

            <div className="w-full">
                <div className="p-4 sm:p-5 md:p-6 m-0 w-full max-w-xs mx-auto shadow-lg text-center bg-rose-400 text-amber-50 rounded-lg flex flex-col justify-between min-h-[300px] sm:min-h-[320px]">
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Book Info</h3>
                        <div className="space-y-2 mb-4">
                            <p className="text-sm sm:text-base wrap-break-word">
                                <span className="font-semibold">Title:</span> {data.title}
                            </p>
                            <p className="text-sm sm:text-base wrap-break-word">
                                <span className="font-semibold">Author:</span> {data.author}
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-4">
                            <input
                                type="checkbox"
                                checked={data.status === 'Available'}
                                onChange={handleToggleStatus}
                                className="w-4 h-4 cursor-pointer"
                            />
                            <span className="text-sm sm:text-base font-medium">{data.status}</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-stretch mt-4">
                        <button
                            className="bg-green-700 p-2 px-4 w-full sm:w-auto sm:min-w-20 rounded-xl hover:bg-green-800 transition-colors text-sm sm:text-base font-medium"
                            onClick={EditAuthor}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-700 p-2 px-4 w-full sm:w-auto sm:min-w-20 rounded-xl hover:bg-red-800 transition-colors text-sm sm:text-base font-medium"
                            onClick={deleteBook}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default BookCard;