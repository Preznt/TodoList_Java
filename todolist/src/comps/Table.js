import List from "./List";

const  Table = () =>{
    return (
        <>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th></th>
                        <th>할일</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <List/>
                </tbody>
            </table>
        </>
    );
};

export default Table;