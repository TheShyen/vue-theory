import {ref, onMounted, onUnmounted, onUpdated} from 'vue'

export function useMouse(compModif) {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    console.log(compModif)
    x.value = event.pageX * compModif
    y.value = event.pageY * compModif
  }

  onMounted(() => {
      window.addEventListener('mousemove', update);
      console.log('UseMouse Mounted')
    }
  )
  onUpdated(() => console.log('UseMouse Updated'))
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
    console.log('UseMouse onMounted')
  })

  return {x, y}
}