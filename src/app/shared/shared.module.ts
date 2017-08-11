import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		MaterialModule,
		BrowserAnimationsModule
	],
	exports: [
		CommonModule,
		BrowserModule,
		MaterialModule,
		BrowserAnimationsModule
	],
	declarations: []
})
export class SharedModule { }
