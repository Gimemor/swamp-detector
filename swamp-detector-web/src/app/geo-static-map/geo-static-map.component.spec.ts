/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoStaticMapComponent } from './geo-static-map.component';

describe('GeoStaticMapComponent', () => {
  let component: GeoStaticMapComponent;
  let fixture: ComponentFixture<GeoStaticMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoStaticMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoStaticMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
