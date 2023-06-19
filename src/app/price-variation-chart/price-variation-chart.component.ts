import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-price-variation-chart',
  templateUrl: './price-variation-chart.component.html',
})
export class PriceVariationChartComponent implements OnInit, OnChanges {
  @Input() data: any[] = []
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef

  constructor() {}

  ngOnInit(): void {
    this.createChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.createChart()
    }
  }
  createChart(): void {
    if (!this.data || this.data.length === 0) {
      return
    }

    const containerWidth = this.chartContainer.nativeElement.offsetWidth
    const containerHeight = 400

    d3.select(this.chartContainer.nativeElement).selectAll('*').remove()

    const margin = { top: 20, right: 20, bottom: 30, left: 50 }
    const width = containerWidth - margin.left - margin.right
    const height = containerHeight - margin.top - margin.bottom

    const svg = d3
      .select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', containerWidth)
      .attr('height', containerHeight)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(this.data.map(d => d.day.toString()))

    const yScale = d3.scaleLinear().range([height, 0])

    yScale.domain([
      d3.min(this.data, d => +d.variationD1.replace('%', '')) || 0,
      d3.max(this.data, d => +d.variationD1.replace('%', '')) || 100,
    ])

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0, ${height})`).call(xAxis)

    svg.append('g').attr('class', 'y-axis').call(yAxis)

    svg
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.day.toString()) || 0)
      .attr('y', d => yScale(+d.variationD1.replace('%', '')))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(+d.variationD1.replace('%', '')))
  }
}
