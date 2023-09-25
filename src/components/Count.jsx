// import withCount from "./Hoc/withCount";

const Count = ({count, handelCount}) => {
     
    return (
        <div>
            <p>{count}</p>
            <button onClick={handelCount}>Count</button>
        </div>
    );
};

 
// export default withCount(Count);
export default Count;