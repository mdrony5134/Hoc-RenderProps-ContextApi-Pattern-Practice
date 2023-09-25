// import withCount from './Hoc/withCount';

 const HoverCount = ({count, handelCount}) => {

    return (
        <div>
            <p>{count}</p>
            <h1 onMouseOver={handelCount}>heading</h1>
        </div>
    );
};

// export default withCount(HoverCount);
export default HoverCount;