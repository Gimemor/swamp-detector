/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoSwampListComponent } from './geo-swamp-list.component';

describe('GeoSwampListComponent', () => {
  let component: GeoSwampListComponent;
  let fixture: ComponentFixture<GeoSwampListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoSwampListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoSwampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
