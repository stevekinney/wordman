const ColorSwatch = ({ color, ...props }) => {
  return (
    <div
      className="h-96 w-96"
      {...props}
      style={{ backgroundColor: '#' + color }}
    />
  );
};

export default ColorSwatch;
