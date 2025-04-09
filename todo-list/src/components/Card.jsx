export default function Card(props) {
    return (
      <>
        <div className="max-w-4xl mt-3 w-full mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            {props.children}
        </div>
      </>
    );
  }
  