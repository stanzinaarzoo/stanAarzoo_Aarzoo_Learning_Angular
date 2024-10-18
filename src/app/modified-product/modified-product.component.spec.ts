import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedProductComponent } from './modified-product.component';

describe('ModifiedProductComponent', () => {
  let component: ModifiedProductComponent;
  let fixture: ComponentFixture<ModifiedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifiedProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifiedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
