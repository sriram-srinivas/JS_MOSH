import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LinkItem extends Component {   
  @tracked activeRoute = '/';
  
  @action isActiveRoute(route){
    console.log('>>isActive',this.activeRoute, route);
    return this.activeRoute === this.args.route;
  }
}