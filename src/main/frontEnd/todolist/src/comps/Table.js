import List from "./List";

const  Table = () =>{
    return (
        <div className="flex border rounded-lg w-3/4 justify-center min-h-screen">
            <caption className="caption-top">
                TodoList
            </caption>
            <table className="border w-3/4 m-4">
                <thead>
                    <tr>
                        <th className="border"></th>
                        <th className="border">할일</th>
                        <th className="border">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <List/>
                </tbody>
            </table>
        </div>
    );
};

export default Table;