export default function SortingOption(props) {
  function handleClick(e) {
    props.selectSortingOption(e);
  }

  const sortingOptionStyles = {
    color: props.title === props.selectedOption ? "goldenrod" : "black",
    fontWeight: props.title === props.selectedOption ? "bold" : "normal",
  };

  return (
    <div className="col-2">
      <p
        onClick={handleClick}
        className="px-3 mb-0 sorting-option"
        style={sortingOptionStyles}
      >
        {props.title}
      </p>
    </div>
  );
}
