import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersOneComponent } from './players-one.component';

describe('PlayersOneComponent', () => {
    let component: PlayersOneComponent;
    let fixture: ComponentFixture<PlayersOneComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PlayersOneComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayersOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
