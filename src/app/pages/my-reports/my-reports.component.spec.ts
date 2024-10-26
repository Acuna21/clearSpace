import { ComponentFixture, TestBed } from "@angular/core/testing";

import {MyReportsComponent } from "@pages/my-reports/my-reports.component";

describe('MyRepotsComponent', () =>{
    let component: MyReportsComponent;
    let fixture: ComponentFixture<MyReportsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MyReportsComponent]
        });
        fixture = TestBed.createComponent(MyReportsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});