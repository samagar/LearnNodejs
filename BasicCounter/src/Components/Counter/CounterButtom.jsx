import { PropTypes } from "prop-types";

export default function Counter({ by, incrementParent, decrementParent }) {
  return (
    <div className="Counter">
      <button
        className="btn btn-success m-1"
        onClick={() => incrementParent(by)}
      >
        +{by}
      </button>
      <button
        className="btn btn-success m-1"
        onClick={() => decrementParent(by)}
      >
        -{by}
      </button>
    </div>
  );
}

Counter.propTypes = {
  by: PropTypes.number,
};
