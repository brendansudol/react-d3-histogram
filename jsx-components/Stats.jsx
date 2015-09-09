var React = require('react');
var ss = require('simple-statistics');


var Stats = React.createClass({
    format: function(x) {
        if (isNaN(parseFloat(x))) return '—';

        if (x % 1 === 0) {
            return x;
        } else if (x < 0.1) {
            return x.toFixed(3);
        } else {
            return x.toFixed(2);
        }
    },

    get_stats: function() {
        var data = this.props.data;

        return {
            count: data.length,
            mean: ss.mean(data),
            median: ss.median(data),
            mode: ss.mode(data),
            min: ss.min(data),
            max: ss.max(data),
            sum: ss.sum(data),
        };
    },

    render: function() {
        var stats = this.get_stats();
        var display_stats = [
            'count', 'min', 'max',
            'mean', 'median', 'sum'
        ];
        var self = this;

        return (
          <div className="row">
            {
                display_stats.map(function(name) {
                    return (
                        <div key={name} className="col-xs-6 col-sm-4">
                            <div className="stat-box">
                                <div className="stat-num">
                                    {self.format(stats[name])}
                                </div>
                                <div className="stat-name">
                                    {name}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
          </div>
        );
    },
});


module.exports = Stats;
