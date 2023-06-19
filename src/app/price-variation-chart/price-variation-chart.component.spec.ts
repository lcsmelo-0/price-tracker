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
    fixture.detectChanges()
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the chart when data is provided', () => {
    component.data = [
      { day: 1, date: '19/06/2023', value: 29.670000076293945, variationD1: '-', variationFirstDay: '-' },
      { day: 2, date: '19/06/2023', value: 29.670000076293945, variationD1: '0.00%', variationFirstDay: '0.00%' },
      { day: 3, date: '19/06/2023', value: 29.670000076293945, variationD1: '0.00%', variationFirstDay: '0.00%' },
      { day: 4, date: '19/06/2023', value: 29.690000534057617, variationD1: '0.07%', variationFirstDay: '0.07%' },
      { day: 5, date: '19/06/2023', value: 29.649999618530273, variationD1: '-0.13%', variationFirstDay: '-0.07%' },
      { day: 6, date: '19/06/2023', value: 29.6299991607666, variationD1: '-0.07%', variationFirstDay: '-0.13%' },
      { day: 7, date: '19/06/2023', value: 29.639999389648438, variationD1: '0.03%', variationFirstDay: '-0.10%' },
      { day: 8, date: '19/06/2023', value: 29.670000076293945, variationD1: '0.10%', variationFirstDay: '0.00%' },
      { day: 9, date: '19/06/2023', value: 29.68000030517578, variationD1: '0.03%', variationFirstDay: '0.03%' },
      { day: 10, date: '19/06/2023', value: 29.670000076293945, variationD1: '-0.03%', variationFirstDay: '0.00%' },
      { day: 11, date: '19/06/2023', value: 29.639999389648438, variationD1: '-0.10%', variationFirstDay: '-0.10%' },
      { day: 12, date: '19/06/2023', value: 29.6299991607666, variationD1: '-0.03%', variationFirstDay: '-0.13%' },
      { day: 13, date: '19/06/2023', value: 29.649999618530273, variationD1: '0.07%', variationFirstDay: '-0.07%' },
      { day: 14, date: '19/06/2023', value: 29.65999984741211, variationD1: '0.03%', variationFirstDay: '-0.03%' },
      { day: 15, date: '19/06/2023', value: 29.729999542236328, variationD1: '0.24%', variationFirstDay: '0.20%' },
      { day: 16, date: '19/06/2023', value: 29.719999313354492, variationD1: '-0.03%', variationFirstDay: '0.17%' },
      { day: 17, date: '19/06/2023', value: 29.770000457763672, variationD1: '0.17%', variationFirstDay: '0.34%' },
      { day: 18, date: '19/06/2023', value: 29.719999313354492, variationD1: '-0.17%', variationFirstDay: '0.17%' },
      { day: 19, date: '19/06/2023', value: 29.690000534057617, variationD1: '-0.10%', variationFirstDay: '0.07%' },
      { day: 20, date: '19/06/2023', value: 29.729999542236328, variationD1: '0.13%', variationFirstDay: '0.20%' },
      { day: 21, date: '19/06/2023', value: 29.700000762939453, variationD1: '-0.10%', variationFirstDay: '0.10%' },
      { day: 22, date: '19/06/2023', value: 29.610000610351562, variationD1: '-0.30%', variationFirstDay: '-0.20%' },
      { day: 23, date: '19/06/2023', value: 29.6299991607666, variationD1: '0.07%', variationFirstDay: '-0.13%' },
    ]
    fixture.detectChanges()

    const chartContainer = fixture.nativeElement.querySelector('#chartContainer')
    expect(chartContainer).toBeTruthy()
  })

  it('should not render the chart when data is not provided', () => {
    component.data = []
    fixture.detectChanges()

    const chartContainer = fixture.nativeElement.querySelector('#chartContainer')
    expect(chartContainer).toBeFalsy()
  })
})
