var React = require('react');
var Stats = require('Stats');
var Histogram = require('Histogram');


var Main = React.createClass({
    getInitialState: function() {
        var starter_nums = [
            0,1,1,2,3,3,3,3,4,4,4,4,4,5,5,
            5,5,5,5,6,6,6,6,6,7,8,7,8,8,9
        ];

        return {
            text: starter_nums.join(','),
        };
    },

    handleChange: function(e) {
        this.setState({ 
            text: e.target.value 
        });
    },

    getNumbers: function() {
        var numbers = this.state.text.split(','),
        data = [];

        numbers.forEach(function(n) {
            var num = parseFloat(n);
            if (!isNaN(num)) data.push(num);
        });

        return data;
    },

    render: function() {
        var data = this.getNumbers();

        return (
          <div>
            <p className="lead">
                Add comma delimited numbers to see summary stats and histogram.
            </p>
            <textarea 
                className="form-control" 
                onChange={this.handleChange} 
                defaultValue={this.state.text}
                placeholder="Add comma delimited numbers"></textarea>
            <br/>
            <Stats data={data} />
            <Histogram data={data} />
            <hr/>
            <p>
                <a href="https://github.com/brendansudol/react-d3-histogram">
                    github repo →
                </a>
            </p>
          </div>
        );
    }
});


React.render(
    <Main />,
    document.getElementById('main')
);
