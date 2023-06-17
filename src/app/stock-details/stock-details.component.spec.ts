import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { StockService } from '../stock.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { StockDetailsComponent } from './stock-details.component'

describe('StockDetailsComponent', () => {
  let component: StockDetailsComponent
  let fixture: ComponentFixture<StockDetailsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: (fn: (value: any) => void) => fn({ symbol: 'your-symbol-value' }),
            },
          },
        },
        StockService,
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })
})
