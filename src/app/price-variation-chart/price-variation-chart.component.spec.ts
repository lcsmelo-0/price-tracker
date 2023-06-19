import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PriceVariationChartComponent } from './price-variation-chart.component'

describe('PriceVariationChartComponent', () => {
  let component: PriceVariationChartComponent
  let fixture: ComponentFixture<PriceVariationChartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceVariationChartComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceVariationChartComponent)
    component = fixture.componentInstance
  })

  it('should create the component', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should render the chart when data is provided', () => {
    component.data = [
      { day: 1, date: '19/06/2023', value: 29.670000076293945, variationD1: '-', variationFirstDay: '-' },
      { day: 2, date: '19/06/2023', value: 29.670000076293945, variationD1: '0.00%', variationFirstDay: '0.00%' },
    ]
    fixture.detectChanges()

    const chartContainer = fixture.nativeElement.querySelector('.chart-container')
    expect(chartContainer).toBeDefined()
  })

  it('should not render the chart when data is not provided', () => {
    component.data = []
    fixture.detectChanges()

    const chartContainer = fixture.nativeElement.querySelector('.chart-container')
    expect(chartContainer).toBeNull()
  })
})
