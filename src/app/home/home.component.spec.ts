import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home.component'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [HomeComponent],
    }).compileComponents()

    router = TestBed.inject(Router) // Inject the Router instance
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should update stockId when input value changes', () => {
    const stockId = 'AAPL'
    const inputElement = fixture.nativeElement.querySelector('input')
    inputElement.value = stockId
    inputElement.dispatchEvent(new Event('input'))
    expect(component.stockId).toEqual(stockId)
  })

  it('should navigate to /stockId when button is clicked', () => {
    const stockId = 'AAPL'
    component.stockId = stockId
    spyOn(router, 'navigateByUrl')
    const buttonElement = fixture.nativeElement.querySelector('button')
    buttonElement.click()
    expect(router.navigateByUrl).toHaveBeenCalledWith(jasmine.stringMatching(`/${stockId}`), jasmine.any(Object))
  })
})
