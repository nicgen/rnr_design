export default function PlaceholderImage({ className = "" }) {
  return (
    <div className={`wireframe-border placeholder-x flex items-center justify-center bg-slate-50 ${className}`}>
      {/* SVG isn't strictly necessary since we use the placeholder-x CSS gradient, 
          but if an actual SVG cross is preferred, we can use one. 
          The background gradient `placeholder-x` handles the cross natively and is fully responsive! */}
    </div>
  );
}
