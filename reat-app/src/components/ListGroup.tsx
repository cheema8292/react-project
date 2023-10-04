function ListGroup() {
  let items = ["islamabad", "Lahore", "Multan", "Bahawalpur"];

  return (
    <>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item"
            onClick={() => console.log(item,index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
