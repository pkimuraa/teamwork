import { mount } from '@vue/test-utils'
import accordion from '@/components/accordion.vue'

describe('accordion', () => {
    const data =[
        {
            title: 'item title',            
            text: 'item text'
        }
    ]
    const tag = 'tag';
    const title = 'seems to have a title';

    it('should render', async() => {
        const wrapper = mount(accordion, {
            propsData: {
                title: title,
                tag: tag,
                data: data
            }
        });
        expect(wrapper.find('.accordion__title').text()).toBe(title);
        expect(wrapper.find('.accordion__tag').text()).toBe(tag);
    });

    it('should open accordion on click', async() => {
        const wrapper = mount(accordion, {
            propsData: {
                title: title,
                tag: tag,
                data: data
            }
        });
        const button = wrapper.find('button');
        const spy = jest.spyOn(wrapper.vm, 'toggle');
        expect(wrapper.find('.accordion__item__title--expanded').exists()).toBe(false);
        button.trigger('click');
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalled();
    })
})
