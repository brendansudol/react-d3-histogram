var React = require('react');
var Stats = require('Stats');
var Histogram = require('Histogram');


var Main = React.createClass({
    getInitialState: function() {
        return {
            text: "2,3,4,5,6,12,13,8,8,8",
        };
    },

    handleChange: function(e) {
        this.setState({ 
            text: e.target.value 
        });
    },

    getNumbers: function() {
        var elements = this.state.text.split(','),
        data = [];

        elements.forEach(function(d) {
            var num = parseFloat(d);
            if (!isNaN(num)) data.push(num);
        });

        return data;
    },

    render: function() {
        var data = this.getNumbers();

        return (
          <div>
            <textarea 
                className="form-control" 
                onChange={this.handleChange} 
                defaultValue={this.state.text}></textarea>
            <br/>
            <Stats data={data} />
            <Histogram data={data} />
          </div>
        );
    }
});


React.render(
    <Main />,
    document.getElementById('main')
);
