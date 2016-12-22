var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Winterfell'>Winterfell, Westeros</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;