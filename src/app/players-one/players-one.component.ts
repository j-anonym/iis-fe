import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';
import {AdminPageService} from "../admin-page/admin-page.service";

@Component({
    selector: 'app-players-one',
    templateUrl: './players-one.component.html',
    styleUrls: ['./players-one.component.scss']
})
export class PlayersOneComponent implements OnInit {

    data;
    id_stat;

    constructor(private userService: AdminPageService, private route: ActivatedRoute, public globals: Globals) { }

    ngOnInit() {
        this.id_stat = this.route.snapshot.paramMap.get("id");
        this.userService.getPlayer(this.id_stat).subscribe(response => {
            this.data = JSON.parse(JSON.stringify(response));
        });
    }

}
