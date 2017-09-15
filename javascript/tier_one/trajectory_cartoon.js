//Define dimensions
var w = 350,
    h = 250,
    margin = 36;

//Create svg object
var svg = d3.select('#{{ object_id }}').append('svg')
            .attr('width', w + (2*margin))
            .attr('height', h + (2*margin))
            .append('g')
            .attr('transform', 'translate(' + margin + ',' + margin + ')');

//Create arc
var arc = d3.svg.arc()
  .outerRadius(80)
  .innerRadius(78)
  .startAngle(Math.PI/4)
  .endAngle(Math.PI/2);

//Arrowhead for line
svg.append("svg:defs")
   .append("svg:marker")
   .attr("id", "arrowhead")	
   .attr("refX", 2)
   .attr("refY", 6.5)
   .attr("markerWidth", 20)
   .attr("markerHeight", 20)
   .attr("orient", "auto")
   .append("svg:path")
   .attr("d", "M2,5 L2,8 L10,6.5 L2,5");

//Create line and append to the body
var trajectory = svg.append("line")
                    .attr("x1", margin)
                    .attr("y1", (h-margin))
                    .attr("x2", (6*margin))
                    .attr("y2", (h-6*margin))
                    .attr("stroke-width", 2)
                    .attr("stroke", "black")
                    .style("stroke-dasharray", ("3, 3"))
                    .attr("marker-end", "url(#arrowhead)");

//Create axes and scales
var yScale = d3.scale.linear()
               .domain([0,1])
               .range([h,0]);

var xScale = d3.scale.linear()
               .domain([0,1])
               .range([w,0]);

var yAxis = d3.svg.axis()
              .scale(yScale)
              .orient('left')
              .ticks(0);

var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient('bottom')
              .ticks(0);

//Add x and y axes
svg.append('g')
  .attr('class', 'axis y')
  .attr('transform','translate('+margin+',0)')
  .call(yAxis);

svg.append('g')
   .attr('class', 'axis x')
   .attr('transform','translate(0,'+(h-margin)+')')
   .call(xAxis);

svg.append('path')
  .attr('class', 'arc')
  .attr('transform', 'translate('+margin+',' + (h-margin) + ')')
  .attr('d', arc);


//Trajectory labels
var label_data = [
    {'cx':(w/2-margin-0.5*margin),'cy':(h-margin-0.5*margin),'label':'\u03b1'},
    {'cx':(w/2-1.1*margin),'cy':(h-margin-h/2),'label':'v0'},
    {'cx':(margin/3),'cy':(h/2),'label':'Y'},
    {'cx':(w/2),'cy':(h-margin/3),'label':'X'}
];

var trajectory_labels = svg.selectAll('text')
                           .data(label_data)
                           .enter()
                           .append('text');
var label_maker = trajectory_labels
                  .attr('x',function(d){return d.cx;})
                  .attr('y',function(d){return d.cy;})
                  .attr('font-size','20px')
                  .text(function(d){return d.label;});


//Add axes titles
//Y
/*
svg.append("text")
    .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
    .attr("transform", "translate("+ (margin/2) +","+(h/2)+")rotate(-90)")  //move down and out and rotate
    .text("y");
//X
svg.append("text")
    .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
    .attr("transform", "translate("+ (w/2) +","+(h-margin/3)+")")  // centre below axis
    .text("x");
*/
