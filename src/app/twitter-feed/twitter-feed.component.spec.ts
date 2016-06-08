import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TwitterFeedComponent } from './twitter-feed.component';

describe('Component: TwitterFeed', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TwitterFeedComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TwitterFeedComponent],
      (component: TwitterFeedComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TwitterFeedComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TwitterFeedComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-twitter-feed></app-twitter-feed>
  `,
  directives: [TwitterFeedComponent]
})
class TwitterFeedComponentTestController {
}

