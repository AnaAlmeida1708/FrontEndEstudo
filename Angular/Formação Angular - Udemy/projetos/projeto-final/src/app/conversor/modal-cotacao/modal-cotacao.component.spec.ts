import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataBrPipe } from '../pipes';
import { ConversorService } from '../services';
import { ModalCotacaoComponent } from './modal-cotacao.component';

describe('ModalCotacaoComponent', () => {
  let component: ModalCotacaoComponent;
  let fixture: ComponentFixture<ModalCotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalCotacaoComponent,
        DataBrPipe
      ],
      providers: [
        ConversorService
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
