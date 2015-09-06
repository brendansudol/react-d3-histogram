var React = require('react');
var ss = require('simple-statistics');


var Stats = React.createClass({
    format: function(x) {
        if (isNaN(parseFloat(x))) return '—';

        var out;

        if (x === 0 || x % 1 === 0) {
            out = x;
        } else if (x < 0.1) {
            out = x.toFixed(3);
        } else {
            out = x.toFixed(2);
        }

        return out;
    },

    get_stats: function() {
        var data = this.props.data;

        return {
            n: data.length,
            mean: ss.mean(data),
            median: ss.median(data),
            sum: ss.sum(data),
        };
    },

    render: function() {
        var stats = this.get_stats();

        return (
          <div className="stats">
            <p>count: {stats.n}</p>
            <p>mean: {stats.mean}</p>
            <p>sum: {stats.sum}</p>
          </div>
        );
    },
});


module.exports = Stats;
